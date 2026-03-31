type PostMeta = {
    category: string;
    postname: string;
    html: string;
};

type PostNormal = {
    title: string;
    description: string;
    date_created: string;
    date_modified: string;
    meta: PostMeta;
};

type PostSuper = {
    title: string;
    description: string;
    meta: PostMeta;
};

export type Post = PostNormal | PostSuper;

export const isPostSuper = (post: Post): post is PostSuper => post.meta.category === "Super";
export const isPostNormal = (post: Post): post is PostNormal => !isPostSuper(post);
