import block from 'bem-cn'
import React, {ChangeEventHandler, useCallback} from 'react'
import './GenresPage.css'
import {debounce} from "lodash";
import {Card} from "../../../components/Card/Card";
import {Input} from "../../../components/Input/Input";
import {Spinner} from "../../../components/Spinner/Spinner";
import {useGenreGetAll} from "../../../hooks/useGenreGetAll";
import {BasePageProps} from "../../../types/base";
import {Link} from "react-router-dom";

interface Props extends BasePageProps {
}

const b = block('genre-page')

export const GenresPage: React.FC<Props> = () => {
  const { data, loading, setSearch } = useGenreGetAll()

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange])

  return (
    <Card title={'Жанры'} className={b()}>
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
