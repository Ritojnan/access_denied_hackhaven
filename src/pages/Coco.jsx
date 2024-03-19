import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

function ObjectDetection() {
  const [webcamStream, setWebcamStream] = useState(null);
  const [detectInterval, setDetectInterval] = useState(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    loadModel();
    return () => {
      stopCamera();
    };
  }, []);

  async function loadModel() {
    await tf.ready();
    const net = await cocoSsd.load();
    startCamera(net);
  }

  async function startCamera(net) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setWebcamStream(stream);
      setDetectInterval(setInterval(() => runObjectDetection(net), 1000));
      setCameraEnabled(true);
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  }

  function stopCamera() {
    clearInterval(detectInterval);
    if (webcamStream) {
      webcamStream.getTracks().forEach(track => track.stop());
    }
    setCameraEnabled(false);
  }

  async function runObjectDetection(net) {
    const video = document.getElementById('my-video');
    const canvas = document.getElementById('object-detection');

    if (video.readyState === 4) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const detectedObjects = await net.detect(video);
      setPredictions(detectedObjects);
    }
  }

  function toggleCamera() {
    if (cameraEnabled) {
      stopCamera();
    } else {
      loadModel();
    }
  }

  return (
    <div>
      <h1>Object Detection with COCO-SSD</h1>
      <video id="my-video" className="my-video" autoPlay muted></video>
      <canvas id="object-detection" className="object-detection"></canvas>
      <button onClick={toggleCamera}>{cameraEnabled ? 'Disable Camera' : 'Enable Camera'}</button>
      <div>
        <h2>Predictions:</h2>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>{prediction.class}: {Math.round(prediction.score * 100)}%</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ObjectDetection;
