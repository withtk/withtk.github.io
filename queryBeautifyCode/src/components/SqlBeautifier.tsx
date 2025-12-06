import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Select, Button, Switch, Popover, Form, InputNumber, message, Tooltip, Space, Typography } from 'antd';
import { Settings, Copy, Check, Play, FileCode } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { autocompletion } from '@codemirror/autocomplete';
import { format } from 'sql-formatter';
import type { SqlLanguage } from 'sql-formatter';
import { getSqlCompletions } from '../utils/snippets.ts';

const { Header, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

// Dialect mapping for sql-formatter
const dialects: { label: string; value: SqlLanguage }[] = [
    { label: 'Standard SQL', value: 'sql' },
    { label: 'MySQL', value: 'mysql' },
    { label: 'PostgreSQL', value: 'postgresql' },
    { label: 'Oracle (PL/SQL)', value: 'plsql' },
    { label: 'SQL Server (T-SQL)', value: 'transactsql' },
    { label: 'SQLite', value: 'sqlite' },
    { label: 'MariaDB', value: 'mariadb' },
    { label: 'Snowflake', value: 'snowflake' },
];

interface FormatSettings {
    useSnippets: boolean;
    tabWidth: number;
    useTabs: boolean;
    keywordCase: 'preserve' | 'upper' | 'lower';
    linesBetweenQueries: number;
    logicalOperatorNewline: 'before' | 'after';
    expressionWidth: number;
    denseOperators: boolean;
    newlineBeforeSemicolon: boolean;
}

const SqlBeautifier: React.FC = () => {
    const [inputSql, setInputSql] = useState<string>('');
    const [outputSql, setOutputSql] = useState<string>('');
    const [dialect, setDialect] = useState<SqlLanguage>('sql');
    const [settings, setSettings] = useState<FormatSettings>({
        useSnippets: true,
        tabWidth: 2,
        useTabs: false,
        keywordCase: 'upper',
        linesBetweenQueries: 2,
        logicalOperatorNewline: 'before',
        expressionWidth: 50,
        denseOperators: false,
        newlineBeforeSemicolon: true,
    });
    const [messageApi, contextHolder] = message.useMessage();

    const handleFormat = useCallback(() => {
        if (!inputSql.trim()) {
            setOutputSql('');
            return;
        }

        try {
            const formatted = format(inputSql, {
                language: dialect,
                tabWidth: settings.tabWidth,
                useTabs: settings.useTabs,
                keywordCase: settings.keywordCase,
                linesBetweenQueries: settings.linesBetweenQueries,
                logicalOperatorNewline: settings.logicalOperatorNewline,
                expressionWidth: settings.expressionWidth,
                denseOperators: settings.denseOperators,
                newlineBeforeSemicolon: settings.newlineBeforeSemicolon,
            });
            setOutputSql(formatted);
        } catch (error) {
            console.error(error);
            messageApi.error('Error formatting SQL: Invalid syntax or unsupported features.');
        }
    }, [inputSql, dialect, settings, messageApi]);

    // Auto-format on shortcut (Ctrl/Cmd + Enter)
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            handleFormat();
        }
    };

    const handleCopy = () => {
        if (!outputSql) return;
        navigator.clipboard.writeText(outputSql);
        messageApi.success('Copied to clipboard!');
    };

    // Custom completion source
    const completionSource = useCallback((context: any) => {
        if (!settings.useSnippets) return null;
        return getSqlCompletions(context, dialect);
    }, [settings.useSnippets, dialect]);

    const extensions = [
        sql(),
        autocompletion({ override: [completionSource] })
    ];

    const settingsContent = (
        <Form layout="vertical" style={{ width: 300 }}>
            <Form.Item label="Enable Snippets" style={{ marginBottom: 12 }}>
                <Switch
                    checked={settings.useSnippets}
                    onChange={(v) => setSettings(s => ({ ...s, useSnippets: v }))}
                />
            </Form.Item>
            <Form.Item label="Keyword Case" style={{ marginBottom: 12 }}>
                <Select
                    value={settings.keywordCase}
                    onChange={(v) => setSettings(s => ({ ...s, keywordCase: v }))}
                >
                    <Option value="upper">UPPERCASE</Option>
                    <Option value="lower">lowercase</Option>
                    <Option value="preserve">Preserve</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Tab Width" style={{ marginBottom: 12 }}>
                <InputNumber
                    min={2} max={8}
                    value={settings.tabWidth}
                    onChange={(v) => setSettings(s => ({ ...s, tabWidth: v || 2 }))}
                />
            </Form.Item>
            <Form.Item label="Logical Operator Newline" style={{ marginBottom: 12 }}>
                <Select
                    value={settings.logicalOperatorNewline}
                    onChange={(v) => setSettings(s => ({ ...s, logicalOperatorNewline: v }))}
                >
                    <Option value="before">Before (AND/OR at start)</Option>
                    <Option value="after">After (AND/OR at end)</Option>
                </Select>
            </Form.Item>
        </Form>
    );

    return (
        <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
            {contextHolder}
            <Header style={{
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 64
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                        padding: 8,
                        borderRadius: 6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FileCode size={20} color="white" />
                    </div>
                    <Title level={4} style={{ margin: 0 }}>SQL Beautifier</Title>
                </div>

                <Space size="middle">
                    <Select
                        value={dialect}
                        onChange={setDialect}
                        style={{ width: 180 }}
                        size="large"
                    >
                        {dialects.map(d => (
                            <Option key={d.value} value={d.value}>{d.label}</Option>
                        ))}
                    </Select>

                    <Popover
                        content={settingsContent}
                        title="Settings"
                        trigger="click"
                        placement="bottomRight"
                    >
                        <Button icon={<Settings size={18} />} size="large" />
                    </Popover>
                </Space>
            </Header>

            <Content style={{ padding: '24px', height: 'calc(100vh - 64px)' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 24,
                    height: '100%'
                }}>
                    {/* Input Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography.Text strong>Input SQL</Typography.Text>
                            <Tooltip title="Format (Cmd/Ctrl + Enter)">
                                <Button
                                    type="primary"
                                    icon={<Play size={16} />}
                                    onClick={handleFormat}
                                >
                                    Beautify
                                </Button>
                            </Tooltip>
                        </div>
                        <div style={{
                            flex: 1,
                            border: '1px solid #d9d9d9',
                            borderRadius: 8,
                            overflow: 'hidden',
                            background: '#fff',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }} onKeyDown={handleKeyDown}>
                            <CodeMirror
                                value={inputSql}
                                height="100%"
                                extensions={extensions}
                                onChange={(value) => setInputSql(value)}
                                theme="light"
                                placeholder="Write your SQL here..."
                                basicSetup={{
                                    lineNumbers: true,
                                    foldGutter: true,
                                    autocompletion: true,
                                }}
                            />
                        </div>
                    </div>

                    {/* Output Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography.Text strong>Formatted Result</Typography.Text>
                            <Button
                                icon={<Copy size={16} />}
                                onClick={handleCopy}
                            >
                                Copy
                            </Button>
                        </div>
                        <div style={{
                            flex: 1,
                            border: '1px solid #d9d9d9',
                            borderRadius: 8,
                            overflow: 'hidden',
                            background: '#fafafa',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}>
                            <CodeMirror
                                value={outputSql}
                                height="100%"
                                extensions={[sql()]}
                                editable={false}
                                theme="light"
                                basicSetup={{
                                    lineNumbers: true,
                                    foldGutter: true,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Content>

            <style>{`
        @media (max-width: 768px) {
          .ant-layout-content > div {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .ant-layout-content {
            height: auto !important;
            min-height: calc(100vh - 64px);
          }
        }
      `}</style>
        </Layout>
    );
};

export default SqlBeautifier;
