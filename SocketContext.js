import React, {createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext();

const socket = io('httt://localhost:5000');

const ContextProvider = ({ children }) => {
    
    //Similar to componenetDidMount, useEffect runs the page has fully load.
    //using the built-in navigator method, we can ask for user's permission to use their camera & audio.
    const [state, setState] = useState(null)
    const [me, setMe] = useState('');
    const [call, setCall] = useState({})
    const [callaccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('')

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
            setStream(currrentStream)

            myVideo.current.srcObject = currentStream;

        })

        socket.on('me', (id) => setImmediate(id));

        socket.on('calluser', ({from, name: callerName, signal }) => {
            setCall({ isReceivedCall: true, from, name: callerName, signal })
            
        })
    }, []);

    const answerCall = () => {
        setCallAccepted(true)

        const peer = new Peer({ initiator: false, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from });
        });
    
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        })
        
        peer.signal(call.signal);

        connectionRef.current = peer;
    
    }



    const  callUser = (id) => {
        const peer = new Peer({ initiator: false, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
        });
    
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        })

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        })
        connectionRef.current = peer;

    }

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    }
return (
    <SocketContext.Provider value={{ call, callaccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall }}>
     </SocketContext.Provider>
)

}

export { ContextProvider, SocketContext }