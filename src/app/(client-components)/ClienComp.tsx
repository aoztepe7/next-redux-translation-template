'use client';

import { useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, reset } from "../redux/features/counterSlice";



export default function ClientComp() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const text = useAppSelector((state) => state.counterReducer.text);
    const dispatch = useAppDispatch();
    const t = useTranslations('ClientComp');
    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <h1>{t("clientText")}</h1>
            <span>{t(text)}</span>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </main>
    )
}
