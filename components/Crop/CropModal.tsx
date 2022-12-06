import { useCallback, useState } from "react"
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select
} from "@chakra-ui/react"
import Cropper from "react-easy-crop";

import getCroppedImg from "../../utils/cropImage";

const aspectRatios: IAspectRatios[] = [
  { name: '4:3', value: 4 / 3, },
  { name: '3:2', value: 3 / 2, },
  { name: '1:1', value: 1 / 1, },
  { name: '2:3', value: 2 / 3, },
  { name: '3:4', value: 3 / 4, },
];

interface IAspectRatios {
  name: string;
  value: number;
}

interface Props {
  visible: boolean;
  loading: boolean;
  image: string | ArrayBuffer | null;
  save: (file: File) => void;
  close?: () => void;
}

export const CropModal = ({ close, image, save, visible, loading }: Props) => {
  const [aspectRatioSelected, setAspectRatioSelected] = useState<IAspectRatios>(aspectRatios[4]);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const saveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image as string,
        croppedAreaPixels,
        rotation
      )
      save(croppedImage as File)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])

  return (
    <Modal
      size='xl'
      isOpen={visible}
      onClose={() => close}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crop Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            position='relative'
            height='calc(90vh - 200px)'
            width='100%'
          >
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatioSelected.value}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </Box>
        </ModalBody>

        <ModalFooter
          gap='20px'
          justifyContent='space-between'
        >
          <Select
            onChange={({ target }) => setAspectRatioSelected(aspectRatios.find(aspect => aspect.name === target.value) as IAspectRatios)}
            value={aspectRatioSelected.name}
          >
            {aspectRatios.map(({ name, value }, i) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </Select>
          <Flex>
            <Button colorScheme='blue' mr={3} onClick={close}>
              Cancelar
            </Button>
            <Button isLoading={loading} variant='ghost' onClick={saveCroppedImage}>Guardar</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}
