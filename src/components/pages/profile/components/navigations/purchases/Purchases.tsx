import React from 'react';
import s from "./Purchases.module.scss";

const Purchases = () => {
    return (
        <div className={s.purchases}>
            <h1>Мои покупки</h1>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Описание</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>02.05.2022 г.</td>
                        <td>Год</td>
                        <td>545 $</td>
                    </tr>
                    <tr>
                        <td>02.05.2022 г.</td>
                        <td>Год</td>
                        <td>545 $</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Purchases;
