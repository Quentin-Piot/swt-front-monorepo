import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useMemo, useState } from "react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { MapNode } from "@/common/types/map";
import { createNode, getNodesForTeamId, NodeInput } from "@/api/nodes";
import { client } from "@/App";
import { useAuth } from "@/hooks/UseAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const MapContent = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const { user } = useAuth();
    const selectedTeamId = useMemo(
        () => (user && user.selectedTeamId) || 0,
        [user]
    );
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["nodes", selectedTeamId],
        queryFn: () => getNodesForTeamId(client, selectedTeamId),
    });
    const [nodePosition, setNodePosition] = useState<[number, number]>([0, 0]);
    const [nodeTitle, setNodeTitle] = useState("");
    const [nodeDescription, setNodeDescription] = useState("");

    const nodes: MapNode[] = useMemo(() => {
        if (!data) return [];

        return data.map((node) => ({
            id: node.id,
            description: node.description,
            location: [node.latitude, node.longitude],
        }));
    }, [data]);
    const mutation = useMutation({
        mutationFn: (node: NodeInput) => {
            return createNode(client, node);
        },
        onSettled: () =>
            queryClient.invalidateQueries(["nodes", selectedTeamId]),
    });

    useMapEvents({
        click: (ev) => {
            setNodePosition([ev.latlng.lat, ev.latlng.lng]);
            onOpen();
        },
        locationfound: (location) => {
            console.log("location found:", location);
        },
    });

    const onCreate = async () => {
        mutation.mutate({
            latitude: nodePosition[0],
            longitude: nodePosition[1],
            title: nodeTitle,
            description: nodeDescription,
            country_code: "FR",
            city: "Paris",
            team: selectedTeamId,
        });
        onClose();
    };
    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {nodes?.map((node) => (
                <Marker position={node.location} key={node.id}>
                    <Popup>{node.description}</Popup>
                </Marker>
            ))}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            value={nodeTitle}
                            onChange={(ev) => setNodeTitle(ev.target.value)}
                            placeholder="Node title"
                            size="sm"
                        />
                        <Input
                            mt={2}
                            value={nodeDescription}
                            onChange={(ev) =>
                                setNodeDescription(ev.target.value)
                            }
                            placeholder="Node description"
                            size="sm"
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="blue" onClick={onCreate}>
                            Create node
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default MapContent;
