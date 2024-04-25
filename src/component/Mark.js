import React, {useState,useEffect,useRef} from "react";
import '../App.css';
import { sample } from "../data/sample";
import {Map,MapMarker,CustomOverlayMap} from 'react-kakao-maps-sdk';
const {kakao} = window;

function Mark() {
    return (
        <Map
            center={{
                lat:37.5029087190,
                lng:127.0377563750,
            }}
            style={{
                width:"300px",
                height:"300px",
            }}
            level={3}
        >
            {sample.map((position)=> (
                <MapMarker
                    key={`${position.id}`}
                    position={position.latlng}
                    image={{
                        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                        size: {
                            width:24,
                            height:35
                        },
                    }}
                    title={position.tite}
                    />
            ))}
        </Map>
    );

}
export default Mark;