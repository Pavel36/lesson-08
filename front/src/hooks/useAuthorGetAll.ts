import { useEffect, useState } from 'react'
import {Author} from "../types/authors";
import {apiAuthorGetAll} from "../api/authors";

interface UseAuthorGetAll {
  data: Author.Data[],
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useAuthorGetAll = (defaultSearch = ''): UseAuthorGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Author.Data[]>([])
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Author.All.Search = {}

    if (search) {
      params.search = search
    }
    setLoading(true)
    apiAuthorGetAll()
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false))

  }, [search])

  return {
    data,
    loading,
    setSearch
  }
}
