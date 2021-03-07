import React, {useState} from 'react';

//context createing
const BlogContext = React.createContext();

//wrapper of context
export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState( [] );

    const addBlogPost = () =>{
        setBlogPosts([
            ...blogPosts, 
            { title: `Blog Post #${blogPosts.length+1}` }]);
    };

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost }}>{children}</BlogContext.Provider>
    );
};

export default BlogContext;