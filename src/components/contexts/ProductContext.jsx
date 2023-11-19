import { useContext, createContext, useState, useEffect } from "react";

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const {articles, setArticles} = useState([])
    const {article, setArticle} = useState(null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        setArticles(await result.json())
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        setArticles(await result.json())
    }

    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <ProductContext.Provider value={{articles, article, getArticles, getArticle, clearArticle}}>
            {children}
        </ProductContext.Provider>
    )
}