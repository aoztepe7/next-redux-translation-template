'use client';

import { useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, reset } from "../redux/features/counterSlice";
import { useGetUsersQuery } from '../redux/services/userApi';
import Loading from './Loading';



export default function ClientComp() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const text = useAppSelector((state) => state.counterReducer.text);
    const dispatch = useAppDispatch();
    const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

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
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <Loading />
            ) : data ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    {data.map((user) => (
                        <div
                            key={user.id}
                            style={{ border: "1px solid #ccc", textAlign: "center" }}
                        >
                            <img
                                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                alt={user.name}
                                style={{ height: 180, width: 180 }}
                            />
                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    )
}
