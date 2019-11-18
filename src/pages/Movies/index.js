import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import MovieList from '../../components/moviesList';

export default function Movies() {
    const [movies, setMovies] = useState([]); /* Sintaxe do useState para criar um estado */
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function getMovies() {
            setLoading(true)

            try {
                const { data } =  await api.get("/sample.json");
    
                setMovies(data.entries.filter((allPrograms) => {
                    return allPrograms.programType === 'movie';
                }))
            } catch (error) {
                console.log(`Erro: ${error}`)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
            }

        }
        
        getMovies();
        
    }, [])

    return (
    <>
        {isLoading ?
            <h1>carregando...</h1>
            :
            <MovieList movies={movies} loading={isLoading}/>
        }
    </>
  );
}
