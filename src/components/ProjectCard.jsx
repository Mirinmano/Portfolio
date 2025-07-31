import React from 'react';

const ProjectCard = ({ project }) => {
  const cardContent = (
    <>
      <time className="font-mono italic">{project.period}</time>
      <div className="text-lg font-black">{project.title}</div>
      <div className="text-justify">{project.description}</div>

      {/* Image Gallery Logic */}
      {project.images && project.images.length > 0 && (
        <div className="mt-4">
          {project.images.length > 1 ? (
            // If there's more than one image, create a scrollable carousel
            <div className="carousel carousel-center w-full space-x-2 bg-base-300 rounded-box p-2">
              {project.images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-box h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            // If there's only one image, display it statically
            <div className="rounded-lg overflow-hidden border border-base-300">
              <img
                src={project.images[0]}
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </>
  );

  const timelineMiddle = (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <li>
      {project.id % 2 === 0 ? (
        <>
          {timelineMiddle}
          <div className="timeline-start mb-10 md:text-end">
            {cardContent}
          </div>
        </>
      ) : (
        <>
          {timelineMiddle}
          <div className="timeline-end mb-10 md:text-start">
            {cardContent}
          </div>
        </>
      )}
      <hr />
    </li>
  );
};

export default ProjectCard;