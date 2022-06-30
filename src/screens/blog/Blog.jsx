import React from 'react'
import BlogComp from '../../components/blog/BlogComp'
import useDocumentTitle from '../../utils/useDocumentTitle'

const Blog = () => {

    useDocumentTitle('Blog - Stake.com')
    return (
        <>
            <BlogComp />
        </>
    )
}

export default Blog