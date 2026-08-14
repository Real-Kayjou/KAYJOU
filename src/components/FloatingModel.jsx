import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import CanvasErrorBoundary from './CanvasErrorBoundary'

function Model({ url, scale = 1, position = [0, 0, 0] }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={scale} position={position} />
}

/**
 * Renders a single GLB/GLTF model gently floating and slowly rotating.
 * Used behind hero copy and inside project cards.
 *
 * Pass `interactive` to enable full 360° drag-to-spin via OrbitControls
 * (rotate only, no pan/zoom by default — override with orbitProps).
 */
export default function FloatingModel({
  url,
  scale = 1,
  position = [0, 0, 0],
  floatSpeed = 1.4,
  floatIntensity = 0.6,
  autoRotate = true,
  cameraPosition = [3, 1.5, 4],
  shadows = false,
  interactive = false,
  orbitProps = {},
  className = '',
}) {
  return (
    <div className={className}>
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: cameraPosition, fov: 35 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.8]}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 5, 3]} intensity={1.4} color="#f2f4f3" />
          <directionalLight position={[-3, -1, -4]} intensity={0.5} color="#f2f4f3" />
          <pointLight position={[-4, -2, -3]} intensity={1.2} color="#c41e3a" />

          <Suspense fallback={null}>
            {interactive ? (
              <Model url={url} scale={scale} position={position} />
            ) : (
              <Float
                speed={floatSpeed}
                rotationIntensity={autoRotate ? 0.6 : 0}
                floatIntensity={floatIntensity}
              >
                <Model url={url} scale={scale} position={position} />
              </Float>
            )}
          </Suspense>

          {shadows && (
            <ContactShadows
              position={[0, -1.2, 0]}
              opacity={0.4}
              scale={8}
              blur={2.5}
              far={2}
            />
          )}

          {interactive && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate
              autoRotate={autoRotate}
              autoRotateSpeed={1.2}
              {...orbitProps}
            />
          )}
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  )
}

useGLTF.preload('/models/ps4_games_collection.glb')
useGLTF.preload('/models/memory_card/scene.gltf')
useGLTF.preload('/models/spiderman-logo.glb')
