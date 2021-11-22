import React, { FC } from 'react';

type ChildProps = {
    title: string;
    children: string;
    id: number;
};
const Card: FC<ChildProps> = ({ title, children, id }) => {
    return (
        <div className={`card-${id}`}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default Card;
