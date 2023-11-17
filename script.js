  const cubeWidthInput = document.getElementById('cubeWidth');
  const cubeWidthRangeInput = document.getElementById('cubeWidthRange');
  const cubeHeightInput = document.getElementById('cubeHeight');
  const cubeHeightRangeInput = document.getElementById('cubeHeightRange');
  const cubeColorInput = document.getElementById('cubeColor');
  const cubeOpacityInput = document.getElementById('cubeOpacity');
  const cubeOpacityRangeInput = document.getElementById('cubeOpacityRange');
  const cubeBorderInput = document.getElementById('cubeBorder');
  const cubeBorderRangeInput = document.getElementById('cubeBorderRange');
  const cubeBorderRadiusInput = document.getElementById('cubeBorderRadius');
  const cubeBorderRadiusRangeInput = document.getElementById('cubeBorderRadiusRange');
  const cubeBoxShadowInput = document.getElementById('cubeBoxShadow');
  const cubeRotationInput = document.getElementById('cubeRotation');
  const cubeRotationRangeInput = document.getElementById('cubeRotationRange');
  const cubeTransitionInput = document.getElementById('cubeTransition');
  const cube = document.querySelector('.cube');
  const generatedCode = document.getElementById('generatedCode');
  const generateCodeBtn = document.getElementById('generateCodeBtn');
   function updateCubeWidth() {
    const cubeWidth = cubeWidthInput.value;
    cube.style.width = `${cubeWidth}px`;
    cubeWidthRangeInput.value = cubeWidth;
  }
   function updateCubeHeight() {
    const cubeHeight = cubeHeightInput.value;
    cube.style.height = `${cubeHeight}px`;
    cubeHeightRangeInput.value = cubeHeight;
  }

   function updateCubeColor() {
    const cubeColor = cubeColorInput.value;
    cube.style.backgroundColor = cubeColor;
  }

   function updateCubeOpacity() {
    const cubeOpacity = cubeOpacityInput.value;
    cube.style.opacity = cubeOpacity;
    cubeOpacityRangeInput.value = cubeOpacity;
  }

   function updateCubeBorder() {
    const cubeBorder = cubeBorderInput.value;
    cube.style.borderWidth = `${cubeBorder}px`;
    cubeBorderRangeInput.value = cubeBorder;
  }

   function updateCubeBorderRadius() {
    const cubeBorderRadius = cubeBorderRadiusInput.value;
    cube.style.borderRadius = `${cubeBorderRadius}px`;
    cubeBorderRadiusRangeInput.value = cubeBorderRadius;
  }

   function updateCubeBoxShadow() {
    const cubeBoxShadow = cubeBoxShadowInput.value;
    cube.style.boxShadow = cubeBoxShadow;
  }

   function updateCubeRotation() {
    const cubeRotation = cubeRotationInput.value;
    cube.style.transform = `rotate(${cubeRotation}deg)`;
    cubeRotationRangeInput.value = cubeRotation;
  }

   function updateCubeTransition() {
    const cubeTransition = cubeTransitionInput.value;
    cube.style.transition = cubeTransition;
  }

   function generateCode() {
    const code = `
      .cube {
        width: ${cubeWidthInput.value}px;
        height: ${cubeHeightInput.value}px;
        background-color: ${cubeColorInput.value};
        opacity: ${cubeOpacityInput.value};
        border-width: ${cubeBorderInput.value}px;
        border-radius: ${cubeBorderRadiusInput.value}px;
        box-shadow: ${cubeBoxShadowInput.value};
        transform: rotate(${cubeRotationInput.value}deg);
        transition: ${cubeTransitionInput.value};
      }
    `;
    generatedCode.textContent = code;
  }

   generateCodeBtn.addEventListener('click', generateCode);
