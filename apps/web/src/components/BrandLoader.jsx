import React, { useMemo } from 'react';

const TAGLINE = 'great things are on the way';

export default function BrandLoader({ visible }) {
    const shouldRender = useMemo(() => visible, [visible]);

    if (!shouldRender) return null;

    return (
        <div className="brand-loader" aria-live="polite" aria-label="Loading CartWiseCo">
            <div className="brand-loader__inner">
                <div className="brand-loader__logo-wrap">
                    <span className="brand-loader__dot" />
                    <span className="brand-loader__logo">CartWise<span>Co</span></span>
                </div>

                <div className="brand-loader__text" aria-label={TAGLINE}>
                    <span className="brand-loader__word brand-loader__word--1">great</span>
                    <span className="brand-loader__word brand-loader__word--2">things</span>
                    <span className="brand-loader__word brand-loader__word--3">are</span>
                    <span className="brand-loader__word brand-loader__word--4">on</span>
                    <span className="brand-loader__word brand-loader__word--5">the</span>
                    <span className="brand-loader__word brand-loader__word--6">way</span>
                </div>
            </div>
        </div>
    );
}
