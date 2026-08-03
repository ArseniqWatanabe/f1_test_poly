import { CANVAS_COLORS, POINT_COLORS } from "../constants/constants";

export interface Coordinate {
    x: number;
    y: number;
    radius: number;
}

export interface CoordinateStreamResponse {
    data: { x: number; y: number }[];
}

export type AnimationType = 'none' | 'pulse' | 'orbit' | 'wave';

export type CanvasEffect = 'none' | 'glass' | 'grid' | 'scanline';

export type CanvasColorKey = keyof typeof CANVAS_COLORS;
export type PointColorKey = keyof typeof POINT_COLORS;

export type Theme = 'gradient' | 'dark' | 'light';

export interface TableColumn {
    key: string;
    label: string;
}

export interface SelectOption {
    id: string;
    label: string;
    preview?: string;
}

export interface DocsDocument {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: DocCategory;
    updatedAt: Date;
}

export type DocCategory = 'legal' | 'technical' | 'research' | 'security';

export type ShopItemType = 'subscription' | 'access' | 'credits' | 'feature';

export interface ShopItem {
    id: string;
    name: string;
    description: string;
    price: number;
    duration?: string;
    type: ShopItemType;
    features: string[];
    popular?: boolean;
}

export interface CartItem {
    item: ShopItem;
    quantity: number;
}

export type TransactionStatus = 'pending' | 'confirmed' | 'failed';

export interface BlockchainTransaction {
    id: string;
    items: CartItem[];
    totalAmount: number;
    timestamp: Date;
    status: TransactionStatus;
    txHash?: string;
}

export type FriendStatus = 'online' | 'offline';

export interface Friend {
    id: string;
    name: string;
    status: FriendStatus;
    lastActive?: string;
    mutualCount?: number;
}

export interface FriendRequest {
    id: string;
    from: Friend;
    timestamp: Date;
}

export interface NewsItem {
    id: string;
    tag: string;
    date: string;
    title: string;
    summary: string;
}

export interface PlatformStat {
    id: string;
    label: string;
    value: string;
    trend?: string;
    status?: 'positive' | 'neutral' | 'negative';
}

export interface ProfileStat {
    label: string;
    value: string;
}

export interface Badge {
    id: string;
    name: string;
    icon: string;
    earned: Date;
}