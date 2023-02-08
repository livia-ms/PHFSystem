import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import ImgLogo from "../../image/logo.svg";

const FooterStyle = styled.footer`
    width: 100%;
    background-color: #000;
    color: #fff;
`;

const LogoStyle = styled.img`
    background-color: #fff;
`;

export default function Footer(){
    return(
        <FooterStyle>
            <Container>
                <Row>
                    <Col>
                        <h3>PHF Engenharia</h3>
                        <LogoStyle src={ImgLogo}/><span>&trade;</span>
                        <p><span>&copy;</span>Todos os direitos reservados</p>
                    </Col>
                </Row>
            </Container>
        </FooterStyle>
    )
}