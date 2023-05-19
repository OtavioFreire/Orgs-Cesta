import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";


import imgTopo from '../../assets/topo.png' 
import imgLogo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={imgTopo} style={stylePage.topo} />
        <Text style={stylePage.titulo} >Detalhe da Cestas</Text>

        <View style = {stylePage.cesta}>
            <Text style = {stylePage.nome}>Cesta de Veduras</Text>
            <View style={stylePage.fazenda}>
                <Image source={imgLogo} style= {stylePage.imgFazenda}></Image>
                <Text style={stylePage.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={stylePage.descricao}>Uma cesta com produtos selecionados
                 cuidadozamente da fazenda
                 direto para sua cozinha</Text>
            <Text style={stylePage.preco}>R$40,00</Text>
        </View>
    </>
}

const stylePage = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome:{
        color: "#464646",
        fontSize:26,
        lineHeight: 42,
        fontFamily: "MonteserratBold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imgFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MonteserratRegular"
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})