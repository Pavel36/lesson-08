import block from 'bem-cn'
import React, {ChangeEventHandler, useCallback} from 'react'
import './AuthorsPage.css'
import {debounce} from "lodash";
import {useAuthorGetAll} from "../../../hooks/useAuthorGetAll";
import {Card} from "../../../components/Card/Card";
import {Input} from "../../../components/Input/Input";
import {Spinner} from "../../../components/Spinner/Spinner";
import {Link} from "react-router-dom";

interface Props {
}

const b = block('authors-page')

export const AuthorsPage: React.FC<Props> = () => {
  const { data, loading, setSearch } = useAuthorGetAll()

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange])

  return (
    <Card title={'Авторы'}>
      <div className={b('content')}>
        <Input
          name={'search'}
          placeholder={'Поиск'}
          onChange={debounceHandlerChange}
        />
        {loading && (
          <Spinner size={32} />
        )}
        <h3>Результаты поиска:</h3>
        {data.length > 0 ? (
          <ul className={b('list')}>
            {data.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </Card>
  )
}
