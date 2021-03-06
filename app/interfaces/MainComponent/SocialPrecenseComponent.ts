export interface ISocialPresence {
    _id: string;
    id?: string;
    pagetitle?: string;
    title?: string;
    image?: string;
    description?: string;
    fblink?: string;
    youtubelink?: string;
    linkinlink?: string;
}

export interface ISocialPresenceInput {
    id?: string;
    pagetitle?: string;
    title?: string;
    image?: string;
    description?: string;
    fblink?: string;
    youtubelink?: string;
    linkinlink?: string;
}