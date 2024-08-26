type Technology = {
   name: string;
   icon: string;
};

type Images = {
   url: string;
};

type Features = {
   text: string
}

export type Project = {
   id: string;
   slug: string;
   title: string;
   name: string;
   mainImage: string;
   images?: Images[];
   website?: string;
   github?: string;
   technologies?: Technology[];
   description?: string;
   features?: Features[]
};