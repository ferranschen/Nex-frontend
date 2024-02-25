import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SectionTitle } from 'ui/titles'

const PlannerNodes = [
    {
        title: "Data Exploration",
        description: "Deploy your new project in one-click.",
    },
    {
        title: "Data Visualization",
        description: "Deploy your new project in one-click.",
    },
    {
        title: "Data Modeling",
        description: "Deploy your new project in one-click.",
    },
    {
        title: "Data Evaluation",
        description: "Deploy your new project in one-click.",
    },
    {
        title: "Data Cleaning",
        description: "Deploy your new project in one-click.",
    }
];

export default function Planner() {
    return (
        <div>
            <SectionTitle title="AI planner" />
            <Carousel
                className="ml-10 w-4/5"
            >
                <CarouselContent>
                    {PlannerNodes.map((node, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <a href="#">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-2 hover:bg-gray-100 transition duration-300">
                                            <CardHeader>
                                                <p className="text-sm font-bold">{node.title}</p>
                                                <CardDescription>{node.description}</CardDescription>
                                            </CardHeader>
                                        </CardContent>
                                    </Card>
                                </a>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}