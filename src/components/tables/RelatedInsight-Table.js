import React from "react";
import { NewsCell } from "../../pages/digital/subPages/subPages.style";
import { Row, Col } from "react-bootstrap";

const RelatedInsight_Table = () => {
    return (
        <>
        <h2 className="fw-bold">Related Insight</h2>
          <Row>
            <Col>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
            </Col>
            <Col>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
            </Col>
          </Row>
        </>
    )
}

export default RelatedInsight_Table;