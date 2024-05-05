import PostLoading from "./post-loading";


const LOADING_ELEMENTS = 4


export default function PostsLoading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.from({ length: LOADING_ELEMENTS }, (_, i) => i).map((item, index) => (
                <PostLoading key={index} />
            ))}
        </div>
    );
}