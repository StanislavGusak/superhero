import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withErrorApi } from '../../Hoc/withErrorApi';
import { GetApi } from '../../Utils/GetApi';
import PersonLinkBack from './PersonLinkBack/PersonLinkBack';
import PersonInfo from './PersonInfo/PersonInfo';
import PersonPhoto from './PersonPhoto/PersonPhoto';
import { API__KEY, API__URL__ROOT, KEY, HTTPS, IMG__URL } from '../../Components/constants';
import UILoading from '../../Utils/UI/UILoading/UILoading';
import './PersonPage.scss';

const PersonComics = React.lazy(() => import('./PersonComics/PersonComics'));

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personComics, setPersonComics] = useState(null);
    const [personDescription, setPersonDescription] = useState(null);
    const [personFavourite, setPersonFavourite] = useState(false);

    const storeData = useSelector(state => state.favouriteReduser);

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await GetApi(`${HTTPS + API__URL__ROOT}/${id + KEY + API__KEY}`);
            const test = res.data.data.results;
            const person = test.map(({ id, name, description, series }) => {
                return {
                    id,
                    name,
                    description,
                    series
                }
            });

            const result = Object(...person);
            const resId = result.id;

            storeData[resId] ? setPersonFavourite(true) : setPersonFavourite(false);

            setPersonId(resId);

            if (res) {
                setPersonInfo([
                    { title: 'Name', desc: result.name },
                    { title: 'Description', desc: result.description },
                ]);

                result.series.items && setPersonComics(result.series.items);

                const personImg = test.map(({ name, thumbnail: { path, extension } }) => {
                    const urlImg = `${path + '/' + IMG__URL + '.' + extension}`
                    return urlImg
                });

                setPersonDescription(test)
                setPersonPhoto(personImg)
                setPersonName(result.name)
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            {/* <UILoading /> */}
            <div className='person-page'>
                <PersonLinkBack />
                <div className='person'>
                    <h1 className='person__title'>{personName}</h1>
                    <div className='person__wrapper'>
                        <PersonPhoto
                            personId={personId}
                            personName={personName}
                            personPhoto={personPhoto}
                            personFavourite={personFavourite}
                            setPersonFavourite={setPersonFavourite}
                        />
                        {personInfo &&
                            <PersonInfo
                                personInfo={personInfo}
                                personDescription={personDescription}
                            />
                        }
                    </div>
                    {personComics && (
                        <Suspense fallback={<UILoading />}>
                            <PersonComics personComics={personComics} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);