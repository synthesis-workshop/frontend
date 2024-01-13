export const Courses = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
        <div className="flex justify-between items-center">
          <h1 className="text-[50px] text-primary font-title">Advanced Organic Chemistry</h1>
          <div className="flex gap-3">
            <div>Free!</div>
            <div>16 Videos</div>
            <div>18 Hours</div>
            <div>5 Tasks</div>
          </div>
        </div>
        <div className="max-w-[590px] self-start">Our Advanced Organic Chemistry course offers a deep dive into organic compounds, 
          reaction mechanisms, and advanced synthesis techniques. Designed for students, researchers, 
          and chemistry enthusiasts, this program equips you with practical laboratory skills, 
          critical thinking abilities, and up-to-date knowledge in the field. 
          Elevate your understanding of organic chemistry and position yourself for success in academia and industry. 
          Enroll now to secure your spot in this enlightening and career-boosting course.</div> 
      </div>
      <div className="max-w-xlPageContent w-11/12" id="body">
        <h2>Course episodes & tasks</h2>
        <div>Course cards go here</div>
      </div>
    </div>
  );
};
