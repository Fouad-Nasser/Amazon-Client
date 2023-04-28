import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'us',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'eg',
    },
]

function CardData({ item }) {
    const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])

    return (
        <div>
            <Card className='bg-white text-dark m-2 mb-4' style={{ height: '21rem' }}>
                <Card.Body>
                    <Card.Title >{item.name}</Card.Title>
                    <NavLink>
                        <Card.Img variant="top" src={item.image} className='img-fluid' style={{ height: '15rem' }} />
                    </NavLink>
                    <NavLink className='mt-1 text-decoration-none '>
                        <div className=''>
                            <span className='text-left see_More '>{t('Seemore')}</span>
                        </div>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardData