"use client"
import React from 'react';
import scss from "@/components/pages/Paket/Paket.module.scss"
import { useGetPaketTarifQuery } from '@/redux/api/product';

const Paket = () => {
    const {data} = useGetPaketTarifQuery()
    console.log(data, "sdfghj");
    
    return (
        <div className={scss.paket}>
            <div className="container">
            <h1>Выберите свой пакет участия</h1>
                <div className={scss.paket}>
                    <div className={scss.paket_card}>
                        <h6>Месяц +</h6>
                        <h2>105,00 $</h2>
                        <button className={scss.btn}>Ежемесячно</button>
                        <ul>      
                              <li>Все статьи</li>
                              <li>Все мастер классы</li>
                        </ul>

                       <div className={scss.btn1}>
                        <button>Оформить подписку</button>

                        </div>
                
                        
                    </div>

                
                    
                    <div className={scss.paket_card}>
                        <h6>Год +</h6>
                        <h2>220,00 $</h2>
                        <button className={scss.btn}>Ежегодно</button>
                        <ul>      
                              <li>Все статьи</li>
                              <li>Все мастер классы</li>
                       
                        </ul>

                        <div className={scss.btn1}>
                        <button>Оформить подписку</button>

                        </div>
                
                        
                    </div>

                    <div className={scss.paket_card}>
                        <h6>Ежегодно</h6>
                        <h2>585,00 $</h2>
                        <button className={scss.btn}>Ежемесячно</button>
                        <ul>      
                              <li>Все статьи</li>
                              <li>Все мастер классы</li>
                              <li>6 новых статей каждый месяц</li>
                              <li>Все мастер классы</li>
                        </ul>

                        <div className={scss.btn1}>
                        <button>Оформить подписку</button>

                        </div>

                       
                
                        
                    </div>

                   


          


               
                  

                  
                </div>

                <p>Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет</p>
                
                  


              
            </div>
            
        </div>
    );
};

export default Paket;