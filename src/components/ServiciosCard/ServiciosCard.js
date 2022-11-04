import React from 'react'
import "./ServiciosCardStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ServiciosCard = () => {
  return (
    <>

    <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='container'>
            <div className='card'>
                <div className='content'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                    <div className='letrasCards'>
                        <h3>Notebooks</h3>
                        <button className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Mas info!</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='content'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                    <div className='letrasCards'>
                        <h3>Notebooks</h3>
                        <button className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Mas info!</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='content'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                    <div className='letrasCards'>
                        <h3>Notebooks</h3>
                        <button className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Mas info!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeIn">
    <div className='container'>
        <div className='card'>
                    <div className='content'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                        <div className='letrasCards'>
                            <h3>Notebooks</h3>
                            <button className="learn-more mt-4">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Mas info!</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                        <div className='letrasCards'>
                            <h3>Notebooks</h3>
                            <button className="learn-more mt-4">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Mas info!</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" alt='img'/>
                        <div className='letrasCards'>
                            <h3>Notebooks</h3>
                            <button className="learn-more mt-4">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Mas info!</span>
                            </button>
                        </div>
                    </div>
                </div>
    </div>
    </AnimationOnScroll>

    </>
  )
}
