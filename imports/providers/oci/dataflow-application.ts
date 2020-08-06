// https://www.terraform.io/docs/providers/oci/r/dataflow_application.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "archive_uri": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arguments": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "class_name": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "configuration": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "driver_shape": {
        "type": "string",
        "required": true
      },
      "executor_shape": {
        "type": "string",
        "required": true
      },
      "file_uri": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "language": {
        "type": "string",
        "required": true
      },
      "logs_bucket_uri": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "num_executors": {
        "type": "number",
        "required": true
      },
      "owner_principal_id": {
        "type": "string",
        "computed": true
      },
      "owner_user_name": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "spark_version": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "warehouse_bucket_uri": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "parameters": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataflowApplicationConfig extends TerraformMetaArguments {
  readonly archiveUri?: string;
  readonly arguments?: string[];
  readonly className?: string;
  readonly compartmentId: string;
  readonly configuration?: { [key: string]: string };
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly driverShape: string;
  readonly executorShape: string;
  readonly fileUri: string;
  readonly freeformTags?: { [key: string]: string };
  readonly language: string;
  readonly logsBucketUri?: string;
  readonly numExecutors: number;
  readonly privateEndpointId?: string;
  readonly sparkVersion: string;
  readonly warehouseBucketUri?: string;
  /** parameters block */
  readonly parameters?: DataflowApplicationParameters[];
  /** timeouts block */
  readonly timeouts?: DataflowApplicationTimeouts;
}
export interface DataflowApplicationParameters {
  readonly name: string;
  readonly value: string;
}
export interface DataflowApplicationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataflowApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataflowApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_application',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._archiveUri = config.archiveUri;
    this._arguments = config.arguments;
    this._className = config.className;
    this._compartmentId = config.compartmentId;
    this._configuration = config.configuration;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._driverShape = config.driverShape;
    this._executorShape = config.executorShape;
    this._fileUri = config.fileUri;
    this._freeformTags = config.freeformTags;
    this._language = config.language;
    this._logsBucketUri = config.logsBucketUri;
    this._numExecutors = config.numExecutors;
    this._privateEndpointId = config.privateEndpointId;
    this._sparkVersion = config.sparkVersion;
    this._warehouseBucketUri = config.warehouseBucketUri;
    this._parameters = config.parameters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_uri - computed: true, optional: true, required: false
  private _archiveUri?: string;
  public get archiveUri() {
    return this._archiveUri ?? this.getStringAttribute('archive_uri');
  }
  public set archiveUri(value: string | undefined) {
    this._archiveUri = value;
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string[];
  public get arguments() {
    return this._arguments ?? this.getListAttribute('arguments');
  }
  public set arguments(value: string[] | undefined) {
    this._arguments = value;
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string;
  public get className() {
    return this._className;
  }
  public set className(value: string | undefined) {
    this._className = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }
  public get configuration(): { [key: string]: string } | undefined {
    return this._configuration; // Getting the computed value is not yet implemented
  }
  public set configuration(value: { [key: string]: string } | undefined) {
    this._configuration = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // driver_shape - computed: false, optional: false, required: true
  private _driverShape: string;
  public get driverShape() {
    return this._driverShape;
  }
  public set driverShape(value: string) {
    this._driverShape = value;
  }

  // executor_shape - computed: false, optional: false, required: true
  private _executorShape: string;
  public get executorShape() {
    return this._executorShape;
  }
  public set executorShape(value: string) {
    this._executorShape = value;
  }

  // file_uri - computed: false, optional: false, required: true
  private _fileUri: string;
  public get fileUri() {
    return this._fileUri;
  }
  public set fileUri(value: string) {
    this._fileUri = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // language - computed: false, optional: false, required: true
  private _language: string;
  public get language() {
    return this._language;
  }
  public set language(value: string) {
    this._language = value;
  }

  // logs_bucket_uri - computed: true, optional: true, required: false
  private _logsBucketUri?: string;
  public get logsBucketUri() {
    return this._logsBucketUri ?? this.getStringAttribute('logs_bucket_uri');
  }
  public set logsBucketUri(value: string | undefined) {
    this._logsBucketUri = value;
  }

  // num_executors - computed: false, optional: false, required: true
  private _numExecutors: number;
  public get numExecutors() {
    return this._numExecutors;
  }
  public set numExecutors(value: number) {
    this._numExecutors = value;
  }

  // owner_principal_id - computed: true, optional: false, required: true
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: true
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string;
  public get privateEndpointId() {
    return this._privateEndpointId ?? this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string | undefined) {
    this._privateEndpointId = value;
  }

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion: string;
  public get sparkVersion() {
    return this._sparkVersion;
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // warehouse_bucket_uri - computed: true, optional: true, required: false
  private _warehouseBucketUri?: string;
  public get warehouseBucketUri() {
    return this._warehouseBucketUri ?? this.getStringAttribute('warehouse_bucket_uri');
  }
  public set warehouseBucketUri(value: string | undefined) {
    this._warehouseBucketUri = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DataflowApplicationParameters[];
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: DataflowApplicationParameters[] | undefined) {
    this._parameters = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataflowApplicationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataflowApplicationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_uri: this._archiveUri,
      arguments: this._arguments,
      class_name: this._className,
      compartment_id: this._compartmentId,
      configuration: this._configuration,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      driver_shape: this._driverShape,
      executor_shape: this._executorShape,
      file_uri: this._fileUri,
      freeform_tags: this._freeformTags,
      language: this._language,
      logs_bucket_uri: this._logsBucketUri,
      num_executors: this._numExecutors,
      private_endpoint_id: this._privateEndpointId,
      spark_version: this._sparkVersion,
      warehouse_bucket_uri: this._warehouseBucketUri,
      parameters: this._parameters,
      timeouts: this._timeouts,
    };
  }
}
