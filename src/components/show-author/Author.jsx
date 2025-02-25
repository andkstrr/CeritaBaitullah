import React from 'react'
import NaswaProfile from '../../../public/images/blogs/naswa.png'
import './author.css'

const Author = () => {
  return (
    <>
        <section className="author">
            <div className="container">
                <div className="author-container">
                    <div className="author-img">
                        <img src={NaswaProfile} alt="Naswa" />
                    </div>
                    <div className="author-info">
                        <h3>Naswa Nurasilah</h3>
                        <p>
                            Seorang penulis dan blogger yang sering berbagi inspirasi.
                            Ia menulis tentang tips Islami, kisah para Nabi, dan kumpulan doa untuk
                            berbagai situasi sehari-hari. Semuanya disampaikan dengan bahasa yang ringan
                            dan mudah dimengerti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Author;
