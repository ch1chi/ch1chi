# ch1chi

### Hi there! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
### I am Oh Chi Heon, Full Stack Web Developer from :kr: Seong-Nam, Republic of Korea 

### Project Name

Food Search and Full-Menu appeared

### Co-Worker

김다현 <br/>
서영석 <br/>
도은빈 <br/>

### 도메인 용어

### 요구사항


### ERD

// 문단 위치에 GSO  Control 추가
private void createRectangleControlAtFirstParagraph() {
        Section firstSection = hwpFile.getBodyText().getSectionList().get(0);
        Paragraph firstParagraph = firstSection.getParagraph(3);

        ParaText paraText = firstParagraph.getText();
        if( paraText == null ) {
        	firstParagraph.createText();
        }

        // 문단에서 사각형 컨트롤의 위치를 표현하기 위한 확장 문자를 넣는다.
        firstParagraph.getText().addExtendCharForGSO();

        // 문단에 사각형 컨트롤 추가한다.
        picture = (ControlPicture) firstParagraph.addNewGsoControl(GsoControlType.Picture);
    }
