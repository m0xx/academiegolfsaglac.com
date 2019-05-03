import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Header from './../components/Header';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Card from '../components/Card';
import HeaderImage from '../components/HeaderImage';

export default function APropos() {
    return (
        <div>
            <Header />
            <HeaderImage />
            <Container>
                <Flex pt={5}>
                    <Box width={1 / 2} px={3}>
                        <Card>
                            <img
                                style={{ borderRadius: '50%' }}
                                src="/static/images/jonathan-moreau.png"
                                width="200"
                                height="200"
                            />
                            <Heading.H2 textStyle="display5" mb={1}>
                                Jonathan Moreau
                            </Heading.H2>
                            <Heading.H3 textStyle="display3" mb={4}>
                                Professionnel en titre classe A
                            </Heading.H3>
                            <Text.P textStyle="body2" textAlign="justify" mb={3}>
                                Natif de Matane, Jonathan Moreau a découvert le golf à l'âge de 15 ans. En raison de sa
                                passion pour le golf, il s'est tourné vers le programme sport-études au Cégep de
                                Trois-Rivières au moment d'entamer ses études collégiales. Il a ensuite poursuivi ses
                                études à l'Université Laval où il a fait son baccalauréat en intervention sportive et
                                son certificat en administration des affaires. Lors de son séjour universitaire, il a
                                porté les couleurs de l’équipe de golf du Rouge et Or pendant quatre ans.
                            </Text.P>
                            <Text.P textStyle="body2" textAlign="justify" mb={3}>
                                {' '}
                                À la fin de ses études, il a décidé de suivre sa première passion en devenant
                                professionnel de golf. Il est depuis 2012 le professionnel en titre au{' '}
                                <Link href="https://www.golfchicoutimi.com/">
                                    <a target="_blank">Club de golf Chicoutimi</a>
                                </Link>
                                .
                            </Text.P>
                            <img src="/static/images/CPGA.jpg" width="250" height="130" />
                        </Card>
                    </Box>
                    <Box width={1 / 2} px={3}>
                        <Box p={3}>
                            <Heading.H2 textStyle="display5" mb={3}>
                                Formations
                            </Heading.H2>
                            <Text.UL ml={2}>
                                <li>2007-2009 Professionnel adjoint au Club de golf Royal Québec</li>
                                <li>
                                    2010-2011 Professionnel au Club de golf Revermont d'Amqui, poste qu'il a occupé
                                    pendant deux ans
                                </li>
                                <li>Depuis2012 Professionnel du Club de golf de Chicoutimi</li>
                                <li>Depuis 2010 Membre de la classe A de la PGA du Canada</li>
                                <li>Il a dirigé l'équipe des Inuk de l'Université du Québec à Chicoutimi</li>
                                <li>
                                    Depuis 2012 il donne des formations aux enseignants en éducation physique des écoles
                                    du Saguenay-Lac-Saint-Jean pour le développement du programme Golf en milieu
                                    scolaire
                                </li>
                                <li>Entraîneur régionnal junior Golf Québec</li>
                            </Text.UL>
                            <Heading.H2 textStyle="display5" mt={4} mb={3}>
                                Compétitions
                            </Heading.H2>
                            <Text.UL ml={2}>
                                <li>2006- 3ième au Championnat universitaire de l'Est du Canada</li>
                                <li>
                                    2007- 19ième au Championnat universitaire canadien de 2007 (2ième meilleur Québécois
                                    derrière Louis-Pierre Godin)
                                </li>
                                <li>2007- 2ième au Championnat universitaire de l'Est du Canada</li>
                                <li>2006- 4ième lors d'un tournoi de la NCAA (division 1) disputé à Binghamton</li>
                                <li>2008- 3ième à la Classique Callaway Golf de Saint-Hyacinthe</li>
                                <li>2008- 7ième au Championnat Callaway Golf, à Grand-Mère</li>
                                <li>2009- 4ième à l’ordre de mérite du circuit Callaway en 2009</li>
                                <li>2009- 1er à la Classique Callaway Golf de Val des Lacs de Sainte-Sophie</li>
                                <li>2009- 6ième lors de l'étape disputée au Club de golf Montcalm de Saint-Liguori</li>
                            </Text.UL>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
