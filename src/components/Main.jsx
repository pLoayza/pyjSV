import React, { useRef } from 'react';
import { useChangeElements } from '../hooks/changeElements';

export function Main () {
    const { handleButtonNo, handleButtonYes, textP, image } = useChangeElements();
    const audioRef = useRef(null);

    const handleAudioEnded = () => {
        if (audioRef.current.readyState >= 2) {
            // El audio está completamente cargado, reinicia la reproducción
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            // Espera hasta que el audio esté completamente cargado
            audioRef.current.addEventListener('loadeddata', () => {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            });
        }
    };

    return (
        <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-2'>
                <h1 className='font-sans font-bold text-gray-400 text-2xl'>Jade mi amor, Quieres ser mi San Valentin?</h1>
                <img src={image} className='w-72' alt='Imagen' />
                <audio ref={audioRef} autoPlay onEnded={handleAudioEnded}>
                    <source src="untilmp3.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <p className='font-mono text-yellow-100'>{textP}</p>
                <section className='flex gap-3'>
                    <button className='bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}>Si</button>
                    <button className='bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}>No</button>
                </section>
            </div>
        </main>
    );
}
