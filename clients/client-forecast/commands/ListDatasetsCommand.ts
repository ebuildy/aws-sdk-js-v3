import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetsCommand,
  serializeAws_json1_1ListDatasetsCommand,
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

export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of datasets created using the <a>CreateDataset</a> operation.
 *       For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is
 *       returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.</p>
 */
export class ListDatasetsCommand extends $Command<
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetsCommandInput) {
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
  ): Handler<ListDatasetsCommandInput, ListDatasetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListDatasetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetsCommandOutput> {
    return deserializeAws_json1_1ListDatasetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
