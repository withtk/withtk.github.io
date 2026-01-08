<template>
  <div class="groups-grid">
    <div 
      v-for="group in sortedGroups" 
      :key="group.type" 
      class="type-box"
    >
      <h2 class="type-title">{{ group.type }}</h2>
      <div class="links">
        <div 
          v-for="item in group.items" 
          :key="item.name" 
          @click="gotoItem(item)" 
          class="link-item"
        >
          <div class="link-label">
            <div class="name-box">
              <span class="name">{{ item.name }}</span>
              <span v-if="item.tag" class="tag-badge">{{ item.tag }}</span>
            </div>
            <p v-if="item.desc" class="desc">{{ item.desc }}</p>
            <div class="spec-tags">
              <span v-for="tag in item.spec" :key="tag" class="spec-tag">{{ tag }}</span>
            </div>
          </div>
          <span class="link-arrow">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import page_list from '../node/page_list.json'
import { exceptionList, typePriority, PROJECT_TYPE, EXTERNAL_LIST } from './util/constants.js'

const list = ref([])
const combined = [
  ...page_list,
  ...EXTERNAL_LIST
]

list.value = combined.filter((element) => !exceptionList.includes(element.name))

const sortedGroups = computed(() => {
  const grouped = list.value.reduce((acc, item) => {
    // JSON의 키값을 실제 라벨로 변환
    const typeLabel = PROJECT_TYPE[item.type] || item.type || PROJECT_TYPE.OTHER
    
    if (!acc[typeLabel]) acc[typeLabel] = []
    acc[typeLabel].push(item)
    return acc
  }, {})

  return Object.keys(grouped)
    .sort((a, b) => {
      const indexA = typePriority.indexOf(a)
      const indexB = typePriority.indexOf(b)
      const pA = indexA === -1 ? 999 : indexA
      const pB = indexB === -1 ? 999 : indexB
      return pA - pB
    })
    .map(type => ({
      type,
      items: grouped[type]
    }))
})

const gotoItem = (item) => {
  const url = item.url || 'https://withtk.github.io/' + item.name
  window.open(url, '_blank')
}
</script>

<style scoped>
.groups-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.type-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  animation: fade-in 0.8s ease-out forwards;
}

.type-title {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--card-border);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-item {
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--fg);
  transition: all 0.2s ease;
}

.link-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.link-item:hover {
  color: var(--accent);
  transform: translateX(4px);
}

.link-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.name-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.name {
  font-size: 1rem;
  font-weight: 600;
}

.tag-badge {
  font-size: 0.6rem;
  padding: 1px 4px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 3px;
  font-weight: 700;
}

.desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.4;
}

.spec-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.2rem;
}

.spec-tag {
  font-size: 0.65rem;
  color: var(--accent);
  background: rgba(99, 102, 241, 0.05);
  padding: 0 4px;
  border-radius: 3px;
}

.link-arrow {
  font-size: 0.8rem;
  opacity: 0.2;
}

.link-item:hover .link-arrow {
  opacity: 1;
}

@media (max-width: 900px) {
  .groups-grid {
    grid-template-columns: 1fr;
  }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
