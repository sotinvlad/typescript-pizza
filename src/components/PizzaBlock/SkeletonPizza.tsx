import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonPizza: React.FC = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={520}
        viewBox='0 0 280 520'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <circle cx='132' cy='120' r='120' />
        <rect x='0' y='426' rx='6' ry='6' width='100' height='24' />
        <rect x='44' y='274' rx='9' ry='9' width='180' height='24' />
        <rect x='0' y='319' rx='11' ry='11' width='280' height='85' />
        <rect x='139' y='420' rx='22' ry='22' width='145' height='38' />
    </ContentLoader>
);

export default SkeletonPizza;
