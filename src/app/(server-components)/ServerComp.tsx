import { useTranslations } from 'next-intl';


export default function ServerComp() {
    const t = useTranslations('Index');
    return (
        <h1>{t("title")}</h1>
    )
}
