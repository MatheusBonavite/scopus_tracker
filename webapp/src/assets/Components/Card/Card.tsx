import React, { FC } from 'react';

type ChildProps = {
    title: string;
    children: string;
};
const Card: FC<ChildProps> = ({ title, children }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default Card;
