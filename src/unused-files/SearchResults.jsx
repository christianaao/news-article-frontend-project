import { useEffect, useState } from "react"
import { searchData } from "../components/api"
import { SearchBar } from "../components/SearchBar"
import { ItemsList } from "./HomePage"
import { ArticleList} from "../components/ArticleList"

export default function SearchResults() {
    const [searchTerm, setSearchTerm] = useState("")

    const [items, setItems] = useState([])

    useEffect(() => {
        if (searchTerm) {
            searchData(searchTerm)
            .then((response) => {
                setItems(response)
            })
        }
    }, [searchTerm])

    return (
        <section>
            {/* <SearchBar setSearchTerm={setSearchTerm}/> */}
            <ArticleList items={items}/>
        </section>
    )
}