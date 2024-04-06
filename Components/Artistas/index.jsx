'use client'
import { Row, Col, Select } from "antd"
import { useEffect, useState } from "react"
import { ranking } from "../../db/ranking"

export const Artist = () => {

  const [genres, setGenres] = useState([])
  const [artists, setArtists] = useState([])


  useEffect(() => {
    //metodo MAP pode ser utilizado para criar novas chaves dentro de um array de objetos. Voce define se o array vai ser de objetos, string....
    const getGenre = ranking.data.ranking.byGenre

    //FORMA DE RETORNO DIRETO
    const byGenre = getGenre.map((g, i) => ({ value: i, label: g.genreName }))

    //FORMA DE FUNÇÀO COM ESCOPO

    // const genreName = { value: i, label: g.genreName }
    // return genreName
    // console.log(byGenre)

    // console.log('getGenre: ', getGenre)

    setGenres(byGenre)
  }, [])

  console.log(genres)


  useEffect(() => {
    // UTILIZAR O FOR PARA PERCORRER A LISTA DE GENEROS E BUCAR OS AUDIOS
    // DENTRO DO FOR UTILIZAR O MAP NA LISTA DE AUDIOS, BUSCANDO SOMENTE O NOME DO ARTISTA
    // NO FINAL DO FOR, ESPALHAR (...) O ARRAY DO MAP EM UM ARRAY AUXILIAR

    let newArray = []
    const getArtist = ranking.data.ranking.byGenre

    for (let i = 0; i < getArtist.length > 0; i++) {
      const audios = getArtist[i].genreAudios
      const artist = audios.map((a, i) => ({ value: i, label: a.artist }))
      newArray.push(...artist)

    }
    setArtists(newArray)
  }, [])

  return (
    <div>
      <Row>
        <Col xs={24}>
          Listar áudios por generos: &nbsp;
          <Select
            defaultValue=""
            style={{
              width: 200,
              marginBottom: '15px'
            }}
            onChange={(e) => console.log(e)}
            options={genres}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          Listar artistas: &nbsp;
          <Select
            defaultValue=""
            style={{
              width: 200,
            }}
            onChange={(e) => console.log(e)}
            options={artists}
          />
        </Col>
      </Row>

    </div>
  )
}