import type { Completion, CompletionContext } from "@codemirror/autocomplete";
import { syntaxTree } from "@codemirror/language";

// Basic keywords for SQL
const commonKeywords = [
  "SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING", "LIMIT",
  "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE FROM",
  "CREATE TABLE", "DROP TABLE", "ALTER TABLE",
  "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "ON",
  "AND", "OR", "NOT", "NULL", "IS", "IN", "BETWEEN", "LIKE", "EXISTS",
  "CASE", "WHEN", "THEN", "ELSE", "END", "AS", "DISTINCT", "UNION", "ALL"
];

// Helper to create completion objects
const createKeywordCompletion = (label: string): Completion => ({
  label,
  type: "keyword"
});

const createSnippetCompletion = (label: string, template: string, detail: string): Completion => ({
  label,
  detail,
  type: "snippet",
  apply: template
});

export const getSqlCompletions = (context: CompletionContext, dialect: string) => {
  let word = context.matchBefore(/\w*/);
  if (!word || (word.from == word.to && !context.explicit)) return null;

  const options: Completion[] = [
    ...commonKeywords.map(createKeywordCompletion),
    // Common Snippets
    createSnippetCompletion("sel", "SELECT * FROM ", "SELECT * FROM"),
    createSnippetCompletion("ins", "INSERT INTO table_name (column1, column2) VALUES (value1, value2);", "INSERT INTO ..."),
    createSnippetCompletion("upd", "UPDATE table_name SET column1 = value1 WHERE condition;", "UPDATE ..."),
    createSnippetCompletion("del", "DELETE FROM table_name WHERE condition;", "DELETE ..."),
    createSnippetCompletion("join", "INNER JOIN table_name ON condition", "INNER JOIN ..."),
    createSnippetCompletion("gb", "GROUP BY ", "GROUP BY"),
    createSnippetCompletion("ob", "ORDER BY ", "ORDER BY"),
  ];

  // Dialect specific additions could go here
  if (dialect === 'postgresql') {
    options.push(createKeywordCompletion("RETURNING"));
    options.push(createKeywordCompletion("ILIKE"));
  }

  if (dialect === 'mysql') {
    options.push(createKeywordCompletion("AUTO_INCREMENT"));
  }

  return {
    from: word.from,
    options
  };
};
