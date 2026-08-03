import { Badge, DocCategory, DocsDocument, Friend, FriendRequest, NewsItem, PlatformStat, ProfileStat, ShopItem } from "../types/types";


export const CANVAS_COLORS = {
    red: '#c62828',
    white: '#ffffff',
    green: '#2e7d32',
    black: '#1a1a1a'
} as const;

export const POINT_COLORS = {
    gold: '#FFD700',
    cyan: '#22d3ee',
    purple: '#8b5cf6',
    black: '#000000',
    white: '#ffffff'
} as const;

export const DOCS_DATA: DocsDocument[] = [
    {
        id: 'data-processing',
        title: 'Decentralized Data & Predictive Modeling Agreement',
        summary: 'Governance of on-chain data, 3D predictive models, and ecological impact records',
        content: `## 1. Platform Overview

This agreement governs the processing, storage, and utilization of data within the M8 decentralized ecosystem. Our infrastructure integrates blockchain immutability, proprietary 3D predictive modeling, and high-performance computing to drive rapid technological and ecological advancement.

## 2. Data Sovereignty & Blockchain Integration

### 2.1 On-Chain vs Off-Chain Data
- **On-Chain**: Cryptographic hashes, smart contract states, ecological impact proofs, and model versioning.
- **Off-Chain**: High-fidelity 3D assets, multi-year historical datasets, and volumetric simulation logs stored in decentralized storage (IPFS/Arweave).

### 2.2 Data Ownership
Researchers and developers retain full intellectual property rights over predictive models and 3D simulations generated on the platform.

## 3. 3D Engine & Predictive Modeling

### 3.1 Historical Data Processing
The M8 3D Engine ingests multi-year historical data to construct volumetric models of past events. 
- **Financial**: Market microstructure and liquidity events.
- **Ecological**: Climate patterns, carbon emission trajectories, and resource depletion.
- **Security**: Network intrusion patterns and threat vectors.

### 3.2 Predictive Simulations
Users may run forward-looking simulations to predict future states based on historical analysis. All predictive models are versioned and recorded on-chain for auditability.

## 4. Ecological Impact & Sustainability

M8 is committed to improving the global ecological situation. 
- **Carbon Tracking**: All computational workloads are offset via automated carbon credit smart contracts.
- **Green Compute**: Priority routing for ecological research models to our renewable-energy-powered node clusters.

## 5. Information Security & Privacy

- **Zero-Trust Architecture**: Every data request and 3D model render is cryptographically verified.
- **Post-Quantum Cryptography**: All on-chain transactions and off-chain data transfers are secured against future quantum computing threats.
- **Sandboxing**: 3D Engine execution environments are strictly isolated to prevent malicious code execution.

## 6. Contact

- **Legal**: legal@m8chain.io
- **Ecological Initiatives**: green@m8chain.io
- **Security Response**: soc@m8chain.io`,
        category: 'legal',
        updatedAt: new Date('2026-07-10')
    },
    {
        id: 'api-integration',
        title: 'Core API & 3D Engine Integration',
        summary: 'Unified gateway for blockchain nodes, 3D predictive rendering, and historical data streams',
        content: `## 1. Architecture Overview

The M8 API provides a unified interface to interact with the blockchain layer, the proprietary 3D Engine, and the historical data lake.

- **Base URL**: \`https://api.m8chain.io/v1\`
- **Protocol**: REST for standard queries, gRPC for high-throughput 3D streaming, WebSocket for real-time chain events.

## 2. Authentication

### 2.1 Wallet & API Keys
Authenticate using your Web3 wallet signature or scoped API keys:

\`\`\`
Authorization: M8 {api_key}:{signature}:{timestamp}
\`\`\`

### 2.2 Smart Contract Signatures
For write operations, transactions must be signed via EIP-712 standard.

## 3. 3D Engine & Predictive Endpoints

### POST /3d/predictive/generate

Ingest historical data and generate a 3D predictive model:

\`\`\`json
{
  "dataset_id": "hist_climate_2010_2025",
  "model_type": "volumetric_regression",
  "prediction_horizon": "10y",
  "render_params": {
    "resolution": "8k",
    "physics_engine": "m8-fluid"
  }
}
\`\`\`

### GET /3d/scenes/{id}/stream

Stream real-time 3D simulation data to client applications (Unity/Unreal/WebGL).

## 4. Blockchain & Data Endpoints

### GET /chain/historical/query

Query multi-year historical events across all indexed chains:

\`\`\`json
{
  "query": "liquidity_events",
  "timeframe": "2020-2026",
  "filters": {
    "volume_gt": 1000000,
    "chain": "all"
  }
}
\`\`\`

### POST /ecology/impact/verify

Submit ecological impact data for on-chain verification and carbon credit minting.

## 5. Rate Limits & Compute Quotas

| Resource | Standard | Pro | Enterprise |
|----------|----------|-----|------------|
| API Calls | 10k/hr | 100k/hr | Unlimited |
| 3D Renders | 10/hr | 100/hr | Custom |
| Predictive Models | 2 active | 10 active | Unlimited |

## 6. SDKs

- **TypeScript/JS**: \`npm install @m8/sdk\`
- **Python (Data Science)**: \`pip install m8-py\`
- **Rust (High-Perf)**: \`cargo add m8-sdk\`
- **Unity/C#**: Available via M8 Asset Store for direct 3D Engine integration.`,
        category: 'technical',
        updatedAt: new Date('2026-07-09')
    },
    {
        id: 'research-protocols',
        title: 'Predictive Research & 3D Modeling Protocols',
        summary: 'Standard operating procedures for historical data analysis and volumetric predictive simulations',
        content: `## 1. Research Paradigm

M8 facilitates a unique research methodology: **Volumetric Predictive Analysis**. By combining multi-year historical data with our proprietary 3D Engine, researchers can visualize and predict complex systemic events.

## 2. Predictive Modeling Workflow

### 2.1 Data Ingestion
1. Select historical datasets (Financial, Ecological, Security).
2. Normalize and map data to 3D spatial coordinates (Time, Volume, Intensity).
3. Validate data integrity via on-chain hash verification.

### 2.2 Model Training & Simulation
1. Choose a predictive algorithm (e.g., LSTM, Transformer, Custom M8 Kernel).
2. Train the model on the historical 3D dataset.
3. Run forward simulations to generate predictive scenarios.

### 2.3 3D Visualization & Analysis
1. Render the predictive output using the M8 3D Engine.
2. Analyze volumetric anomalies (e.g., predicted market crashes, ecological tipping points).
3. Export findings and lock the model version on-chain.

## 3. Ecological Research Protocols

### 3.1 Carbon Footprint Modeling
- Ingest historical emission data.
- Simulate future trajectories based on current policies.
- Visualize impact zones in 3D geospatial formats.

### 3.2 Resource Optimization
- Model supply chain logistics in 3D.
- Predict bottlenecks and optimize routing for minimal ecological impact.

## 4. Information Security Research

### 4.1 Threat Modeling
- Ingest historical network intrusion data.
- Generate 3D topological maps of network vulnerabilities.
- Simulate zero-day attack vectors to test defensive protocols.

## 5. Publishing & Peer Review

All research models must include:
- **On-Chain Proof**: Hash of the dataset and model weights.
- **Reproducibility**: Dockerized environment for peer verification.
- **3D Snapshot**: Static render of the predictive model for abstract viewing.`,
        category: 'research',
        updatedAt: new Date('2026-07-08')
    },
    {
        id: 'security-standards',
        title: 'Information Security & Infrastructure Standards',
        summary: 'Zero-trust architecture, post-quantum cryptography, and 3D engine sandboxing protocols',
        content: `## 1. Security Philosophy

M8 operates on a strict **Zero-Trust Architecture**. Every interaction with the blockchain, the 3D Engine, and the data lake is cryptographically verified and continuously monitored.

## 2. Cryptographic Standards

### 2.1 Post-Quantum Readiness
To protect long-term ecological and financial data, M8 is transitioning to post-quantum cryptographic algorithms (e.g., CRYSTALS-Kyber, CRYSTALS-Dilithium) for all key exchanges and digital signatures.

### 2.2 On-Chain Security
- **Smart Contract Audits**: All platform contracts undergo formal verification and multi-firm audits.
- **Multi-Sig Governance**: Protocol upgrades require 7-of-12 multi-signature approval from decentralized node operators.

## 3. 3D Engine Sandboxing

The proprietary 3D Engine executes untrusted code (custom shaders, physics scripts) in a strictly isolated environment:

- **WebAssembly (Wasm) Isolation**: All custom logic runs in a memory-safe Wasm sandbox.
- **Resource Capping**: Strict limits on CPU, GPU, and memory allocation per simulation to prevent denial-of-service.
- **No Network Access**: Sandboxed 3D environments have zero outbound network access.

## 4. Data Protection & Privacy

### 4.1 Encrypted Data Lake
- **At Rest**: AES-256-GCM encryption with hardware-backed key management (HSM).
- **In Transit**: TLS 1.3 with mandatory certificate pinning.
- **Homomorphic Encryption**: Experimental support for running predictive models on encrypted data without decryption.

### 4.2 Access Control
- **Role-Based Access Control (RBAC)**: Granular permissions for data access and 3D engine compute.
- **Zero-Knowledge Proofs (ZKP)**: Users can prove they possess certain data or credentials without revealing the data itself.

## 5. Incident Response & Monitoring

- **24/7 SOC**: Dedicated Security Operations Center monitoring all blockchain and compute nodes.
- **Automated Circuit Breakers**: Smart contracts automatically pause operations if anomalous behavior is detected.
- **Bug Bounty**: Active program rewarding researchers for identifying vulnerabilities in the 3D Engine or blockchain layer.

## 6. Contact

For security inquiries: soc@m8chain.io
PGP Key available on our official GitHub repository.`,
        category: 'security',
        updatedAt: new Date('2026-07-07')
    }
];

export const CATEGORIES: { id: DocCategory; name: string }[] = [
    { id: 'legal', name: 'Legal & Compliance' },
    { id: 'technical', name: 'Technical Documentation' },
    { id: 'research', name: 'Research Protocols' },
    { id: 'security', name: 'Security' }
];

export const SHOP_ITEMS: ShopItem[] = [
    {
        id: 'premium-monthly',
        name: 'Premium Access',
        description: 'Full platform access with advanced analytics and priority compute',
        price: 100,
        duration: '30 days',
        type: 'subscription',
        features: [
            'Unlimited predictive models',
            '8K 3D rendering',
            'Priority node access',
            'Advanced API rate limits',
            'Dedicated support'
        ],
        popular: true
    },
    {
        id: 'premium-yearly',
        name: 'Premium Annual',
        description: 'Best value - full platform access for a full year with 20% discount',
        price: 960,
        duration: '365 days',
        type: 'subscription',
        features: [
            'All Premium monthly features',
            '20% cost savings',
            'Early access to new features',
            'Beta testing program access',
            'Priority feature requests'
        ]
    },
    {
        id: 'pro-access-7d',
        name: 'Pro Access Pass',
        description: 'Short-term access for intensive research sprints',
        price: 35,
        duration: '7 days',
        type: 'access',
        features: [
            'Full platform access',
            'Standard compute quota',
            'Basic API access',
            'Community support'
        ]
    },
    {
        id: 'pro-access-30d',
        name: 'Pro Monthly Pass',
        description: 'Extended access for ongoing research projects',
        price: 120,
        duration: '30 days',
        type: 'access',
        features: [
            'Full platform access',
            'Enhanced compute quota',
            'Extended API limits',
            'Priority support'
        ]
    },
    {
        id: 'compute-credits-500',
        name: 'Compute Credits (500)',
        description: 'Starter pack for 3D engine rendering and simulations',
        price: 25,
        type: 'credits',
        features: [
            '500 compute credits',
            'No expiration',
            'Transferable between projects'
        ]
    },
    {
        id: 'compute-credits-1000',
        name: 'Compute Credits (1000)',
        description: 'Standard pack for serious research work',
        price: 50,
        type: 'credits',
        features: [
            '1000 compute credits',
            'No expiration',
            'Transferable between projects',
            '5% bonus credits included'
        ],
        popular: true
    },
    {
        id: 'compute-credits-5000',
        name: 'Compute Credits (5000)',
        description: 'Bulk pack for large-scale simulations and rendering',
        price: 225,
        type: 'credits',
        features: [
            '5000 compute credits',
            'No expiration',
            'Transferable between projects',
            '10% bonus credits included',
            'Priority rendering queue'
        ]
    },
    {
        id: 'api-pro-access',
        name: 'API Pro Access',
        description: 'Enhanced API rate limits and advanced endpoints',
        price: 75,
        duration: '30 days',
        type: 'feature',
        features: [
            '50,000 API requests/hour',
            'WebSocket streaming access',
            'Advanced analytics endpoints',
            'Custom webhook support'
        ]
    },
    {
        id: '3d-engine-pro',
        name: '3D Engine Pro License',
        description: 'Advanced 3D rendering features and custom shaders',
        price: 150,
        duration: '30 days',
        type: 'feature',
        features: [
            'Custom shader support',
            'Advanced physics engine',
            '8K rendering resolution',
            'Priority render queue',
            'Commercial usage rights'
        ]
    }
];

export const MOCK_FRIENDS: Friend[] = [
    { id: '1', name: 'Alex Chen', status: 'online', mutualCount: 12 },
    { id: '2', name: 'Maria Rodriguez', status: 'online', mutualCount: 8 },
    { id: '3', name: 'James Wilson', status: 'offline', lastActive: '2 hours ago', mutualCount: 5 },
    { id: '4', name: 'Sarah Kim', status: 'online', mutualCount: 15 },
    { id: '5', name: 'David Park', status: 'offline', lastActive: '1 day ago', mutualCount: 3 },
    { id: '6', name: 'Emma Thompson', status: 'online', mutualCount: 20 }
];

export const MOCK_REQUESTS: FriendRequest[] = [
    { id: 'r1', from: { id: '7', name: 'Michael Brown', status: 'online', mutualCount: 2 }, timestamp: new Date('2026-07-10') },
    { id: 'r2', from: { id: '8', name: 'Lisa Anderson', status: 'offline', mutualCount: 1 }, timestamp: new Date('2026-07-09') }
];

export const MOCK_NEWS: NewsItem[] = [
    {
        id: 'n1',
        tag: 'Network',
        date: 'July 12, 2026',
        title: 'M8 Mainnet Beta v2.4 Successfully Deployed',
        summary: 'The latest update introduces post-quantum cryptographic signatures and a 40% reduction in block finality time across all validator nodes.',
    },
    {
        id: 'n2',
        tag: '3D Engine',
        date: 'July 10, 2026',
        title: 'Volumetric Fluid Dynamics Module Released',
        summary: 'Researchers can now simulate complex fluid interactions in real-time. The new module is fully integrated with the predictive modeling pipeline.',
    },
    {
        id: 'n3',
        tag: 'Ecology',
        date: 'July 08, 2026',
        title: 'Partnership Announced with Global Carbon Registry',
        summary: 'M8 compute nodes will now automatically mint verified carbon credits for every 1000 hours of green-energy-powered computation.',
    },
    {
        id: 'n4',
        tag: 'Fintech',
        date: 'July 05, 2026',
        title: 'High-Frequency Trading API v2 Now Live',
        summary: 'Sub-millisecond WebSocket streams are now available for Pro and Enterprise tier users. Includes new order book reconstruction endpoints.',
    }
];

export const MOCK_STATS: PlatformStat[] = [
    { id: 's1', label: 'Active Nodes', value: '14,203', trend: '+12%', status: 'positive' },
    { id: 's2', label: 'Network Status', value: 'Operational', status: 'positive' },
    { id: 's3', label: 'Compute Load', value: '84 PFLOPS', trend: 'Stable', status: 'neutral' },
    { id: 's4', label: 'CO2 Offset', value: '1,240 t', trend: '+5%', status: 'positive' }
];

export const MOCK_PROFILE_STATS: ProfileStat[] = [
    { label: 'Friends', value: '47' },
    { label: 'Research Projects', value: '12' },
    { label: 'Transactions', value: '238' },
    { label: 'Compute Hours', value: '1,847' }
];

export const MOCK_BADGES: Badge[] = [
    { id: 'b1', name: 'Early Adopter', icon: '★', earned: new Date('2025-03-15') },
    { id: 'b2', name: 'Research Pioneer', icon: '◆', earned: new Date('2025-06-20') },
    { id: 'b3', name: 'Carbon Neutral', icon: '♻', earned: new Date('2026-01-10') }
];