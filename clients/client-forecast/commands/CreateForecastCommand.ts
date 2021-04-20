import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreateForecastRequest, CreateForecastResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateForecastCommand,
  serializeAws_json1_1CreateForecastCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateForecastCommandInput extends CreateForecastRequest {}
export interface CreateForecastCommandOutput extends CreateForecastResponse, __MetadataBearer {}

/**
 * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was
 *       used to train the predictor. This is known as inference. To retrieve the forecast for a single
 *       item at low latency, use the  operation. To
 *       export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p>
 *          <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which
 *       you specify in the <a>CreatePredictor</a> request. When you query a forecast, you
 *       can request a specific date range within the forecast.</p>
 *          <p>To get a list of all your forecasts, use the <a>ListForecasts</a>
 *       operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
 *         or export the forecast. Use the <a>DescribeForecast</a> operation to get the
 *         status.</p>
 *          </note>
 */
export class CreateForecastCommand extends $Command<
  CreateForecastCommandInput,
  CreateForecastCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateForecastCommandInput, CreateForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateForecastResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateForecastCommandOutput> {
    return deserializeAws_json1_1CreateForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
