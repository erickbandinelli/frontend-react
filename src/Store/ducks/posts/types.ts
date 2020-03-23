/**
 *  Action types
 */
export enum PostsTypes {
	LOAD_REQUEST = '@posts/LOAD_REQUEST',
	LOAD_SUCCCES = '@posts/LOAD_SUCCCES',
	LOAD_FAILURE = '@posts/LOAD_FAILURE'
}

export interface Posts {
    id: string,
    user_id: string,
    title: string,
    body: string,
    links: {
        self: {
            href: string,
            edit: {
                href: string
            }
        }
    }
}

/**
 *  State types
 */
export interface PostsState {
	readonly data: Posts[],
	readonly loading: boolean,
	readonly error: boolean
}
