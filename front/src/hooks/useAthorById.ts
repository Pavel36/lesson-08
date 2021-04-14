import { useEffect, useState } from 'react'
import { Language } from '../types/language'
import {apiAuthorGetById} from "../api/authors";

interface UseAthorById {
  data: Language.Data | null;
  loading: boolean;
  setId: (id: number) => void
}

export const useAuthorById = (defaultId?: number): UseAthorById => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Language.Data | null>(null)
  const [id, setId] = useState<number | undefined>(defaultId)

  useEffect(() => {
    if (id === undefined || isNaN(id)) return

    setData(null)
    setLoading(true)
      apiAuthorGetById(id)
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false))
  }, [id])

  return {
    data,
    loading,
    setId
  }
}
