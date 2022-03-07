import style from './Blog.module.scss';
import PageBorder from "../PageBorder/PageBorder";

const Blog = () => {
    return (
        <PageBorder>
            <div>
                <span className={style.soon}>Blog <br/>Coming soon!</span>
            </div>
        </PageBorder>
    )
}

export default Blog;