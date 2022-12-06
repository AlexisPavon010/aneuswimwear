import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import Cropper from "react-easy-crop";

import getCroppedImg from "../../utils/cropImage";

const aspectRatios = [
  { name: '4:3', value: 4 / 3, },
  { name: '3:2', value: 3 / 2, },
  { name: '1:1', value: 1 / 1, },
  { name: '2:3', value: 2 / 3, },
  { name: '3:4', value: 3 / 4, },
];

export const CropModal = () => {
  const [aspectRatioSelected, setAspectRatioSelected] = useState(aspectRatios[4]);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [loading, setLoading] = useState(false)
  const [close, setClose] = useState(false)

  const src = 'https://res.cloudinary.com/alexispavon010/image/upload/v1669752858/aneu/v8gc2hagjyhf1iu3mpjw.jpg'

  const handleUploadFile = (file: any) => {
    console.log(file)
  }

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const saveCroppedImage = useCallback(async () => {
    setLoading(true)
    try {
      const croppedImage = await getCroppedImg(
        src,
        croppedAreaPixels,
        rotation
      )
      handleUploadFile(croppedImage)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [croppedAreaPixels, rotation])

  return (
    <Modal
      size='xl'
      isOpen={close}
      onClose={() => setClose(true)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            position='relative'
            height='calc(90vh - 200px)'
            width='100%'
          >
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatioSelected.value}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => setClose(true)}>
            Close
          </Button>
          <Button variant='ghost' onClick={saveCroppedImage}>Guardar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}
